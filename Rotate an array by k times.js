let Array = [1, 2, 3, 4, 5];
let N = Array.length;
let K = 1;
function RightRotate(a, n, k)
{
    k = k % n;

    for (let i = 0; i < n; i++) {
        if (i < k) {
            console.log(a[n + i - k] + " ");
        }
        else {
            console.log((a[i - k]) + " ");
        }
    }
    console.log("");
}
RightRotate(Array, N, K);