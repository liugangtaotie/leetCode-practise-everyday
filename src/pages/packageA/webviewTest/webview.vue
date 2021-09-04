<template>
	<view>
		<web-view :src="url"></web-view>
	</view>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';

@Component({})
export default class WebView extends Vue {
		private url:string = '';
		
		onLoad(option:any){
			this.url = decodeURIComponent(option.url);
		}
}
</script>
