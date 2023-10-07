object "Pure_yul"{
    code {

        datacopy(0, dataoffset("runtime") , datasize("runtime"))
        return (0 , datasize("runtime"))

    }
    object "runtime"{
        code {

            if lt(calldatasize() , 4){
                revert(0, 0)
            }

           let selector := shr(224,calldataload(0))
            switch selector
            case 0x74135154 {
                mstore(0, 4)
                return (0 , 0x20)
            }
            default {
                revert(0, 0)
            }

            

        }
    }
}