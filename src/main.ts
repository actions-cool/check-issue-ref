import * as core from '@actions/core';
import * as github from '@actions/github';
import { Octokit } from '@octokit/rest';
import { THANKS } from 'actions-util';

async function run(): Promise<void> {
  try {
    const token = core.getInput('token');
    const octokit = new Octokit({ auth: `token ${token}` });
    const context = github.context;
    const { owner, repo } = context.repo;

    if (context.eventName === 'issues') {
      const issue_number = (context as any).payload.issue.number;

      // 先查 100 个
      const { data: events } = await octokit.issues.listEventsForTimeline({
        owner,
        repo,
        issue_number,
        per_page: 100,
      });

      let result: any = 0;
      if (events && events.length) {
        for (const event of events) {
          if (event.event === 'cross-referenced') {
            result = event.source?.issue?.number;
          }
          break;
        }
      }
      if (result) {
        core.info(`[Action] issue ${issue_number} refer issue ${result}`);
      }
      core.setOutput('result', result);
    } else {
      core.setFailed(`This Action only support "issues" !`);
    }
    core.info(THANKS);
  } catch (error: any) {
    core.setFailed(error.message);
  }
}

run();
