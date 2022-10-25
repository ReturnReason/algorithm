#include <bits/stdc++.h>
using namespace std;

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	int N;
	cin >> N;
	
	int arr[N] = {0, };
	
	for(int i = 0; i < N; i++){
		int k;
		cin >> k;
		
		arr[i] = k;
	}
	
	sort(arr, arr + N);
	
	for(int i = 0; i < N; i++){
		cout << arr[i] << "\n";
	}

}