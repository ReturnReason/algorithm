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

// 2022.11.28 재풀이
#include <bits/stdc++.h>
using namespace std; 

int A, B, C, ret;
int start, ed;
int arr[104];

int main(){
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	cin >> A >> B >> C;
	for(int i = 0; i <3; i++){
		cin >> start >> ed;
		for(int j = start; j < ed; j++){
			arr[j]++;
		}
	}
	
	for(auto i : arr){
		if(i == 1) ret += A;
		else if(i == 2) ret += (B * 2);
		else if(i == 3) ret += (C * 3);
	}
	
	cout << ret;
	
  return 0;
} 