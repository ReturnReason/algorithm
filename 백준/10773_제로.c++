#include <bits/stdc++.h>
using namespace std;

stack<int> stk;
int ret;

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);
    
    int K;
    cin >> K;
    
    for(int i = 0; i < K; i++){
        int num;
        cin >> num;
        
        if(num != 0){
            stk.push(num);
            ret += num;
        } else {
            if(stk.size()){
                ret -= stk.top();
                stk.pop();
            }
        }
    }
    
    cout << ret;

    return 0;
}
