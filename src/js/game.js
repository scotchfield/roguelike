var game = (function () {
	'use strict';

	var canvas, state, render_cb = [],
		width = 40, height = 40,

	player = {
		x: undefined, y: undefined,
	},

	options = {
		font: '14pt monospace',
		tileWidth: 16,
		tileHeight: 16,
		width: width,
		height: height,
	};

	render_cb.removeCb = function(cb) {
		for (var i = this.length; i >= 0; i -= 1) {
			if (this[i] === cb) {
				this.splice(i, 1);
			}
		}

		return this;
	};

	var render = function () {
		render_cb.forEach(function (cb) {
			cb();
		});
	},
	setup = function () {
		player.x = 1;
		player.y = 1;
	},

	renderTitle = function () {
		rl.write('Hello, World!', 1, 1);
	},
	renderMap = function () {
		rl.clear();
	},

	keydownTitle = function keydown(e) {
		rl.setTiles([])
			.unregisterKeydown(keydown)
			.registerKeydown(keydownMap);
		render_cb.removeCb(renderTitle)
			.push(renderMap);
		setup();
		render();
	},
	keydownMap = function keydown(e) {};

	rl.create('game_canvas', options)
		.registerKeydown(keydownTitle);

	state = 'title';
	render_cb.push(renderTitle);
	render();

}());