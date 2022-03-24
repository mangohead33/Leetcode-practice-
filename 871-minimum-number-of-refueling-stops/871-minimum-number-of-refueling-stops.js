var minRefuelStops = function(target, startFuel, stations) {
     if (startFuel >= target) {
        return 0;
    }
    if (startFuel < target && (!stations.length || startFuel < stations[0][0])) {
        // Check to see if we even have enough gas at all
        return -1;
    }
    let targetReached = false;
    let count = 0;
    let totalFuel = startFuel;
    // Utilizing a double linked list to keep track of stations with most fuel, and which stations have already ebeen drained
    let tail = {val: stations[0][1],
                hasFuel: true,
                prev: null,
                next: null
               };
    for (let i = 0; i < stations.length; i++) {
        // if (totalFuel >= target || targetReached) {
        //     targetReached = true;
        //     break;
        // }
    
        let station = stations[i];
        if (i) {
            // keep track of the stations with the most fuel
                checkStations(station[1])
            }

        let nextStation = stations[i + 1] ? stations[i + 1] : false;
        // check if we have enough fuel or if we're at the last stop
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
            } else if (totalFuel < nextStop) {
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
                        node.next = compare;
                        compare.prev = node;
                        break;
                        }  
                    }     
                }
        }
    return targetReached ? count : -1;
};