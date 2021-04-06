var findMedianSortedArrays = function(nums1, nums2) {
    var median;
    var num=nums1.concat(nums2).sort((a,b)=>{return a-b})
    if(num.length%2==0)
        {
            median=(num[num.length/2]+num[num.length/2-1])/2
}
else
    {
        median=num[parseInt(num.length/2)]
}
   return median 
};