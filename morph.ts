class Point {
	constructor(public x: number, public y: number) {
	}
	public times(r: number): Point {
		return new Point(this.x * r, this.y * r);
	}
	public plus(p: Point): Point {
		return new Point(this.x + p.x, this.y + p.y);
	}
	public minus(p: Point): Point {
		return new Point(this.x - p.x, this.y - p.y);
	}
	public mag(): number {
		return Math.sqrt(this.x * this.x + this.y + this.y);
	}
	public dot(p: Point): number {
		return p.x * this.x + p.y * this.y;
	}
	public cross(p: Point): number {
		return p.x * this.y - p.y * this.x;
	}
	public norm(): Point {
		return this.times(1 / this.mag());
	}
}

function pointToLine(p: Point, x1: Point, x2: Point): number {
	return x2.minus(x1).cross(x1.minus(p)) / x2.minus(x1).mag();
}

class Triangle {
	public a: Point;
	public b: Point;
	public c: Point;
	public ad: number;
	public bd: number;
	public cd: number;
	contructor(a: Point, b: Point, c: Point) {
		this.a = a;
		this.b = b;
		this.c = c;
		this.ad = pointToLine(a, b, c);
		this.bd = pointToLine(b, a, c);
		this.cd = pointToLine(c, b, a);
	}
	public trilinear(p: Point): number[] {
		var n: number[] = [
			this.ad - pointToLine(p, this.b, this.c),
			this.bd - pointToLine(p, this.a, this.c),
			this.cd - pointToLine(p, this.b, this.a)
		], tot: number = n[0] + n[1] + n[2];
		return [n[0] / tot, n[1] / tot, n[2] / tot];
	}
	public bilinear(p: number[]): Point {
		return this.a.times(p[0]).plus(this.b.times(p[1])).plus(this.c.times(p[2]));
	}
}

var images: { [name: string]: ImageData } = {};

function get(imgData: ImageData, x: number, y: number): number[] {
	var i: number = (y * imgData.width + x) * 4;
	return [imgData[i], imgData[i + 1], imgData[i + 2], imgData[i + 3]];
}

document.addEventListener("DOMContentLoaded", (): void => {
	var img: NodeListOf<HTMLImageElement> = document.getElementsByTagName("img");
	for (var i: number = 0; i < img.length; ++i) {
		var im = img[i];
		im.addEventListener('load', (): void => {
			var c: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("canvas");
			c.width = im.clientWidth;
			c.height = im.clientHeight;
			var ctx: CanvasRenderingContext2D = c.getContext("2d");
			ctx.drawImage(<HTMLElement> im, 0, 0);
			images[im.id] = ctx.getImageData(0, 0, c.width, c.height);
		});
	}
});