#!/usr/bin/env bash

echo "============================================"
echo "Initializing JavaScript Linter Benchmarks"
echo "============================================"
echo ""

# Create tmp directory for repos
mkdir -p tmp
pushd tmp

# Clone VS Code repository
if [ ! -d "vscode" ]; then
    echo "Cloning VS Code repository..."
    git clone --depth=1 git@github.com:microsoft/vscode.git
else
    echo "VS Code repository already exists, skipping..."
fi

# Clone Vue Core repository
if [ ! -d "vue-core" ]; then
    echo "Cloning Vue Core repository..."
    git clone --depth=1 git@github.com:vuejs/core.git vue-core
else
    echo "Vue Core repository already exists, skipping..."
fi

# Clone Sentry repository
if [ ! -d "sentry" ]; then
    echo "Cloning Sentry repository..."
    git clone --depth=1 git@github.com:getsentry/sentry.git sentry
else
    echo "Sentry repository already exists, skipping..."
fi

popd

# Install dependencies
echo ""
echo "Installing dependencies..."
pnpm install

# Clean up old eslint configs in VS Code
echo ""
echo "Cleaning up old ESLint configs in VS Code..."
rm -rf ./tmp/vscode/.eslintrc.json
rm -rf ./tmp/vscode/**/.eslintrc.json

echo ""
echo "============================================"
echo "Initialization complete!"
echo "============================================"
echo ""
echo "You can now run benchmarks with:"
echo "  ./bench-all.sh    # Run all benchmarks"
echo "  cd bench-vscode && ./bench.sh    # Run VS Code benchmark only"
echo "  cd bench-vue && ./bench.sh       # Run Vue benchmark only"
echo "  cd bench-sentry && ./bench.sh    # Run Sentry benchmark only"
