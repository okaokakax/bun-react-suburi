FROM oven/bun:alpine

WORKDIR /work

COPY package.json .
COPY bun.lockb .

RUN bun install

COPY . .

EXPOSE 5173