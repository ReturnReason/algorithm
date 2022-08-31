#include <bits/stdc++.h>
using namespace std;

int main(){
	std::ios::sync_with_stdio(0);
	std::cin.tie(0);
	
	int cnt = 0;
	
	int n;
	cin >> n ;
	
	int arr[n] = {0, };
	
	for(int i = 0; i < n; i++){
		cin >> arr[i];
	}
	
	int v;
	cin >> v;
	
	for(int i=0; i< n; i++){
		if(v == arr[i]) cnt++;
	}
	
	cout << cnt << "\n";
	
	return 0;
}