#include <bits/stdc++.h>
using namespace std;

deque<int> dq;

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	int N;
	cin >> N;

	for(int i = 1; i <= N; i++){
		dq.push_back(i);
	}
	
	
	while(dq.size() != 1){
		dq.pop_front();
		if(dq.size() == 1) break;
		
		dq.push_back(dq.front());
		dq.pop_front();
		if(dq.size() == 1) break;
		
	}
	
	cout << dq.front() << "\n";
	
}