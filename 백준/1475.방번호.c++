#include <bits/stdc++.h>
using namespace std;

int main(){
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	string set;
	cin >> set;
	
	int arr[10] = {0, };
	
	for(char c : set){
		
		if(c == '9' && arr[c - '0'] > arr[6]){
			arr[6]++;
		}
		else if(c == '6' && arr[c - '0'] > arr[9]){
			arr[9]++;
		}
		else{
			arr[c - '0']++;
		}
	}
	
	int max = arr[0];
	
	for(int i = 0; i < 10; i++){
		if(max < arr[i]){
			max = arr[i];
		}
	}

	cout << max << "\n";
	
	return 0;
}