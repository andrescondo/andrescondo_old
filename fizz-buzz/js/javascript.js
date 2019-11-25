var x;

for(x=0; x<=100; x++) /*debe iniciar con = 0*/
{	
	document.write(x);
	if(x %5==0)
	{
		document.write(" fizz");
	}

	if(x %3==0)
	{
		document.write(" buzz");
	}
	document.write("<br>");
 }
