import Slack from "@slack/bolt";
import dotenv from "dotenv";

dotenv.config();

const slackApp = new Slack.App({
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    token: process.env.SLACK_BOT_TOKEN,
});

const blocks = [
    {
        "type": "header",
        "text": {
            "type": "plain_text",
            "text": "New request",
            "emoji": true
        }
    },
    {
        "type": "section",
        "fields": [
            {
                "type": "mrkdwn",
                "text": "*Type:*\nPaid Time Off"
            },
            {
                "type": "mrkdwn",
                "text": "*Created by:*\n<example.com|Fred Enriquez>"
            }
        ]
    },
    {
        "type": "section",
        "fields": [
            {
                "type": "mrkdwn",
                "text": "*When:*\nAug 10 - Aug 13"
            },
            {
                "type": "mrkdwn",
                "text": "*Type:*\nPaid time off"
            }
        ]
    },
    {
        "type": "section",
        "fields": [
            {
                "type": "mrkdwn",
                "text": "*Hours:*\n16.0 (2 days)"
            },
            {
                "type": "mrkdwn",
                "text": "*Remaining balance:*\n32.0 hours (4 days)"
            }
        ]
    },
    {
        "type": "section",
        "text": {
            "type": "mrkdwn",
            "text": "<https://example.com|View request>"
        }
    }
]

await slackApp.client.chat.postMessage({
    token: process.env.SLACK_BOT_TOKEN,
    channel: process.env.SLACK_CHANNEL,
    text: "This is a test",
    blocks
});
