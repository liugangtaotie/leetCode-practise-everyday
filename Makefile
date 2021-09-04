.PHONY: app
default: help

# build all theme
dev-h5:
	npm run dev:h5

dev-wx:
	npm run dev:mp-weixin
	
build-h5:
	npm run build:h5

build-wx:
	npm run build:mp-weixin

dll:
	npm run build:dll
