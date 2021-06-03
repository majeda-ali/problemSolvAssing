// problem solving Trans 
function resultComp( input1 , input2)
{
if (input1.length !== input2.length)
console.log("NO");
	else
	{
		let numCharAccept = 0; // العدد بناءً على كم مره كانت المقارنه صح 
		for (let i = 0; i < input1.length; i++)
		{
			if (input1[i] != input2[input1.length - i - 1])
			{
				console.log("NO");
				break;
			}
			else numCharAccept++;
		}
		if (numCharAccept == input1.length)
        console.log("Yes");
	}
}

resultComp("code","code")

