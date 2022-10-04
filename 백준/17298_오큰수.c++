#include <bits/stdc++.h>
using namespace std; 

int N;
int arr[1000004];
int ret[1000004];
stack<int> stk;

int main(){
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	cin >> N;
	
	for(int i = 0; i < 1000004; i++){
		ret[i] = -1;
	}
	
	for(int i = 0; i < N; i++){
		
		cin >> arr[i];
	
		while(stk.size() && arr[i] > arr[stk.top()] ){
			ret[stk.top()] = arr[i];
			stk.pop();
		}
		stk.push(i);
	}
	
	for(int i = 0; i < N; i++){
		cout << ret[i] << " ";
	}
	
  return 0;    
}