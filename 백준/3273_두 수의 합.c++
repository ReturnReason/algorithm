#include <bits/stdc++.h>
using namespace std;

int main (){
	ios::sync_with_stdio(0);
	cin.tie(0); cout.tie(0);
	
	int arr[1000004] = {0, };
	int list[1000004] = {0, };

	// 1~100만: n
	// 1 ~ 200만 : x 
	int n, x;
	cin >> n;
	
	int ret = 0;
	
	for(int i = 0; i < n; i++){
		cin >> arr[i];
	}
	
	cin >> x;
	
	for(int i = 0; i < n; i++){
		int find = x - arr[i];
		
		if(find < 0 || find > 1000000) continue;
		
		if(list[find] > 0){
			ret++;	
		}else{
			list[arr[i]]++;
		}
		
	}
	
	cout << ret << "\n";
	
	return 0;
}