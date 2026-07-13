# Agent Instructions

## Package Manager
N/A — Docker Compose project.

## Commands
| Task | Command |
|------|---------|
| Start | `docker compose up -d` |
| Stop | `docker compose down` |
| Stop (preserve volumes) | `docker compose stop` |
| Full cleanup (data loss) | `docker compose down -v` |
| Pull images | `docker compose pull` |
| Logs | `docker compose logs -f` |
| Backup | `docker compose exec appsmith appsmithctl export_db` |
| Restore | `docker compose exec appsmith appsmithctl import_db` |

## External References
| Need | File |
|------|------|
| Config | `.env.example` |
| Services | `docker-compose.yml` |
| Secrets | `openssl rand -base64 32` |

## Key Conventions
- Secrets in `.env` — gitignored, never commit.
- First deploy: `cp .env.example .env`, generate secrets with `openssl rand -base64 32`, then `docker compose up -d`.
- Update Appsmith: change `APPSMITH_VERSION` in `.env`, then `docker compose pull && docker compose up -d`.
- Health check: `curl --fail http://localhost:80/api/v1/health`.
- First boot runs migrations — give it a few minutes.
- Appsmith uses **MongoDB** as its primary database (not Postgres).
- Redis is enabled for caching and session management.
- To query Directus DB from Appsmith: add a PostgreSQL datasource in the Appsmith UI pointing at `host.docker.internal:5433`.

## Commit Attribution
```
Co-Authored-By: opencode <support@opencode.ai>
```
