jsonSyntax = {
	'html':{
		'values':{
			'find':'(&lt;.*?)(&quot;.*?&quot;)(.*?&gt;)',
			'replace':'$1<span class="htmlValue">$2</span>$3'
		},
		'attributes':{
			'find':'(&lt;.*?)(\\s(.*?))?(&gt;)',
			'replace':'$1<span class="htmlAttribute">$2</span>$4'
		},
		'tags':{
			'find':'(&lt;.*?&gt;)',
			'replace':'<span class="htmlTag">$1</span>'
		}
	},
	'css':{
	
	}
}	