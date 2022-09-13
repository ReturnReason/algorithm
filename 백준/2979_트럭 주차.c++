#include <bits/stdc++.h>
using namespace std;

int main(){
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	int A, B, C;
	cin >> A >> B >> C;
	
	int cnt[101] = {0, };
	
	for(int i = 0; i < 3; i++){
		int in, out;
		cin >> in >> out;
		
		for(int j = in; j < out; j++){
			cnt[j]++;
		}
	}
	
	int result = 0;

	for(int i = 1; i < 100; i++){
		if( cnt[i] == 1 ){
			result += A * 1;
		}else if( cnt[i] == 2 ){
			result += B * 2;
		}else if (cnt [i] == 3){
			result += C * 3;
		}
	}
	
	cout << result ;
	
	return 0;
}