<!-- polymer elements -->
<link rel="import" href="../../polymer/polymer.html">
<link rel="import" href="../../paper-button/paper-button.html">
<link rel="import" href="../../iron-icon/iron-icon.html">
<!-- app elements -->
<link rel="import" href="../a-iconset/a-iconset.html">

<dom-module id="a-social-btn">
	<template>
		<style type="text/css">
			.paper-btn {
				display: flex;
				justify-content: center;
				align-items: center;
				color: var(--secondary-text-color);
				font-size: var(--medium-text-size);
				margin-bottom: 7px;
			}

			.google-sign {
				background: #dd4b39;
			}

			.insta-sign {
				background: linear-gradient(to left, #d22e79, #e03b64, #d62d78);
			}

			.paper-btn .icon {
				display: block;
				padding-top: 3px;
				width: 24px;
				height: 24px;
			}
		</style>

		<a href="{{url}}" tabindex="-1">
			<template is="dom-if" if="{{_checkSocial(social,'google')}}">
				<paper-button class="paper-btn google-sign">
					<iron-icon class="icon" icon="google:main"></iron-icon>
				</paper-button>
			</template>
			<template is="dom-if" if="{{_checkSocial(social,'instagram')}}">
				<paper-button class="paper-btn insta-sign">
					<iron-icon class="icon" icon="insta:main"></iron-icon>
				</paper-button>
			</template>
		</a>
	</template>

	<script>
		Polymer({
			is: "a-social-btn",
			properties: {
				social: {
					type: String
				}
			},
			ready: function () {},
			_checkSocial: function (social, valu) {
				return social == valu
			}
		});
	</script>
</dom-module>
