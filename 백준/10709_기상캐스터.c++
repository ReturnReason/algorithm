#include <bits/stdc++.h>
using namespace std; 

int H, W;
char arr[104][104];
int result[104][104];

int main(){
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	scanf("%d %d", &H, &W);
	for(int i = 0; i < H; i++){
		for(int j = 0; j < W; j++){
			result[i][j] = -1;
		}
	}
	
	for(int i = 0; i < H; i++){
		for(int j = 0; j < W; j++){
			scanf(" %c", &arr[i][j]);
			if(arr[i][j] == 'c'){
				result[i][j] = 0;
			}
		}
	}
	
	for(int i = 0; i < H; i++){
		int cnt = 1;
		bool isCloud = 0;
		for(int j = 0; j < W ; j++){
			if(isCloud && arr[i][j] != 'c') result[i][j] = cnt++;
			if(arr[i][j] == 'c'){
				isCloud = 1;	
				cnt = 1;
			}
		}
	}
	
	for(int i = 0; i < H; i++){
		for(int j = 0; j < W; j++){
			printf("%d ", result[i][j]);
		}
		printf("\n");
	}
	
  return 0;    
}