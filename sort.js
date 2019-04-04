function maopaosort () {
    // 冒泡排序
    console.log('冒泡排序');
    let srcArray = [4,3,2,1];
    let temp = 0;
    // for(let i = 0; i< srcArray.length; i++){
    //     for(let j = 0; j< srcArray.length-i; j++){
    //         if(srcArray[i] < srcArray[j]){
    //             temp = srcArray[i];
    //             srcArray[i] = srcArray[j];
    //             srcArray[j] = temp;
    //         }
    //         console.log(`外${i}a${srcArray[i]}内第${j}轮:${srcArray}`);
    //     }
    //     console.log(`第${i}轮:${srcArray}`);
    // }
    // 3 2 1
    for (let i = 0; i < srcArray.length; i++) {
        for (let j = 0; j < srcArray.length - i; j++) {
            if (srcArray[j] > srcArray[j+1]) {
                temp = srcArray[j];
                srcArray[j] = srcArray[j+1];
                srcArray[j+1] = temp;
            }
            console.log(`外${i}a${srcArray[j]}内第${j}轮:${srcArray}`);
        }
        console.log(`第${i}轮:${srcArray}`);
    }

}
function xuanzesort () {
    // 选择排序
    let src = [4,3,2,1];
    for(let i = 0; i < src.length ;i++){
        let minIndex = 0;
        let minTemp = Number.MAX_VALUE;
        for(let j = i; j< src.length ; j++){
            if(src[j] < minTemp){
                // 记录最小下标
                minIndex = j;
                minTemp = src[j];
            }
        }

        // 交换最小值
        let temp = src[i];
        src[i] = minTemp;
        src[minIndex] = temp;
    }
    console.log('====================================');
    console.log(src);
    console.log('====================================');
}