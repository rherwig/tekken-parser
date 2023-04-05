# Tekken

This repository contains the Tekken Notation Parser and a future frontend implementation of it.

## Development

Install the project's dependencies via:

```bash
pnpm install
```

Now both `test` and `build` scripts can be run using the following commands:
```bash
pnpm build
pnpm test
```

## Deployment

### Frontend
```bash
docker build -t rherwig/tekken-space-frontend:latest .
docker push rherwig/tekken-space-frontend:latest
```

### Database
```bash
docker build -t rherwig/tekken-space-database:latest ./infrastructure/database
docker push rherwig/tekken-space-database:latest
```

### Proxy
```bash
docker build -t rherwig/tekken-space-proxy:latest ./infrastructure/proxy
docker push rherwig/tekken-space-proxy:latest
```

## License
MIT
