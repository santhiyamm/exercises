var num=process.argv[2];
var first=0;
var sec=1;
var output;
for(var i=0;i<num;i++)
{
	if(i===0)
	{
		console.log(first);
	}
	else if(i==1)
	{
console.log(sec);
	}
	else
	{
		output=first+sec;
		console.log(output);
		first=sec;
		sec=output;
	}
}
