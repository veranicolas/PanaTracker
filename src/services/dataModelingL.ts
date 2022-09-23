
const sortRankedData = (rankedData: any[]):any =>{

    if(rankedData){
        const rankedSOLO = rankedData.filter((queue)=>{
            return queue.queueType === 'RANKED_SOLO_5x5'
        })
        if(rankedSOLO[0] !== undefined){
            return `${rankedSOLO[0].leaguePoints}LP   ${rankedSOLO[0].rank}`
        } else {
            return `${rankedData[0].leaguePoints}LP   ${rankedData[0].rank}`
        }
    } else {
        return 'Unranked'
    }
}

export { sortRankedData }