var minRefuelStops = function(target, startFuel, stations) {
    if (startFuel < target && (!stations.length || startFuel < stations[0][0])) {
        return -1;
    }
    if (startFuel >= target) {
        return 0;
    }
    let targetReached = false;
    let count = 0;
    let totalFuel = startFuel;
    let currentFuel = startFuel;
    let tail = {val: stations[0][1],
                hasFuel: true,
                prev: null,
                next: null
               };
    for (let i = 0; i < stations.length; i++) {
        if (totalFuel >= target || targetReached) {
            targetReached = true;
            break;
        }
        
        let station = stations[i];
        if (i) {
                checkStations(station[1])
            }

        let nextStation = stations[i + 1] ? stations[i + 1] : false;
        if (nextStation) {
            if (totalFuel < nextStation[0]) {
                let noMoreFuel = refillTank(tail, nextStation[0], target)
                if (noMoreFuel) {
                    break;
                }
            }
           
        } else {
            refillTank(tail, target, target);
            break;
        }
        
    }
    function refillTank(tail, nextStop, target) {
        let pointer = tail;
        let abortTrip = false;
        while (totalFuel < nextStop) {
            if (pointer.hasFuel) {
            totalFuel = totalFuel + pointer.val;
            pointer.hasFuel = false; 
            count++;
        }
        if (pointer.prev) {
            pointer = pointer.prev;
        } else {
            break;
        } 
        }
        
        if (totalFuel >= target) {
                targetReached = true;
            } else if (totalFuel >= nextStop) {
            } else {
                abortTrip = true;
            }
        return abortTrip;
    };
    
    function checkStations(fuel) {
            let node = {val: fuel,
                           hasFuel: true,
                           prev: null,
                           next:null
                           };
            if (node.val >= tail.val) {
                node.prev = tail;
                tail.next = node;
                tail = node;
            } else {
            let compare = tail;
            while (compare.val > node.val) {
                if (compare.prev) {
                    if ( compare.prev.val <= node.val) {
                        node.next = compare;
                        compare.prev.next = node;
                        node.prev = compare.prev;
                        compare.prev = node;
                        break;
                        }
                        compare = compare.prev;
                        } else {
                        //it's null
                        node.next = compare;
                        compare.prev = node;
                        break;
                        }  
                    }     
                }
        }
    return targetReached ? count : -1;
};