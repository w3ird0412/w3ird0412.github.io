// 定義變數
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let x = [0, canvas.width, canvas.width], y = [0, 0, canvas.height], dx = [5, -5, -5], dy = [5, 5, -5], r = [30, 30, 30], color = ["#CE0000", "#000000", "#FF8000"];
let n = 3;


// 畫圓形
function drawBall(x, y, r, color)
{
	ctx.beginPath();
	ctx.arc(x, y, r, 0, Math.PI * 2); // arc(圓心x, 圓心y, 半徑, 起始角, 結束角)
	ctx.fillStyle = color;
	ctx.fill();
	ctx.closePath();
}


// 更新畫布
function draw()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);

	for(let i=0; i<n; ++i)
	{
		x[i] = x[i] + dx[i];
		y[i] = y[i] + dy[i];
	}
	
    for(let i=0; i<n; ++i)
	{
		if(x[i] < 0 || x[i] > canvas.width)         
	    {
		    dx[i] = -dx[i];	
        }
        if(y[i] < 0 || y[i] > canvas.height)        
	    {
		    dy[i] = -dy[i];
	    }
	}

    // TODO: 如果發生碰撞(畫布寬canvas.width, 畫布高canvas.height)，則改變速度(dx, dy)和顏色(color)
    // ...
	
	for(let i=0; i<n; ++i)
	{
	    for(let j=i+1; j<n; ++j)
	    {
			if((x[i]-x[j])*(x[i]-x[j]) + (y[i]-y[j])*(y[i]-y[j]) <= (r[i]+r[j])*(r[i]+r[j]))      
	        {
                [dx[i], dx[j], dy[i], dy[j]] = [dx[j], dx[i], dy[j], dy[i]];
	        } 
	    }
	}

    for(let i=0; i<n; ++i)
    {
        drawBall(x[i], y[i], r[i], color[i]);
    }
    requestAnimationFrame(draw);
}
draw();