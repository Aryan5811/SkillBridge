# GitHub Setup

The repository URL is:

```text
https://github.com/Aryan5811/SkillBridge
```

The Codex GitHub connector can currently see the repository metadata, but it cannot write files until the GitHub App is installed for the account or repository with contents write access.

## Option 1: Enable Connector Push

1. Open GitHub app installation settings for the Codex/OpenAI GitHub integration.
2. Install it for `Aryan5811`.
3. Grant access to `Aryan5811/SkillBridge`.
4. Return to Codex and ask to push the project again.

## Option 2: Push From This Folder

Install Git for Windows, then run from the project root:

```powershell
.\scripts\publish-github.ps1
```

The script initializes `main`, commits the project, adds the GitHub remote, and pushes to the repository.
