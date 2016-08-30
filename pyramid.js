var i, space, rows, k=0;
var num=process.argv[2];
    for(i=1; i<=rows; ++i, k=0)
    {
        for(space=1; space<=rows-i; ++space)
        {
          console.log("  ");
        }

        while(k != 2*i-1)
        {
          console.log("* ");
            ++k;
        }

        console.log("\n");
    }
