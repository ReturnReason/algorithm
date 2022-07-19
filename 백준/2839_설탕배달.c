#pragma warning(disable : 4996)
#include <stdio.h>
int main()
{

	int sugar;
	scanf("%d", &sugar);

	int count = 0;

	while(sugar > 0){
	
		if (sugar >= 5 && sugar % 5 == 0) {
			sugar = sugar - 5;
			count++;
		}
		else if (sugar >= 3) {
			sugar = sugar - 3;
			count++;
		}
		else {
			count = -1;
			break;
		}
	}

	printf("%d", count);

	return 0;

}