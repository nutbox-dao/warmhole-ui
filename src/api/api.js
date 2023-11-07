import { get, post, put } from "./axios"
import { BACKEND_API_URL } from '../config'

export const postErr = async (module, title, error) =>
    post(BACKEND_API_URL + '/sys/err', {module, title, error})
export const uiLog = async (str) =>
    get(BACKEND_API_URL + 'sys/collect-log', {str})
export const getCommon = async () =>
    get("https://api-walnut.nutbox.app/common")

export const getPriceBSC = async () =>
    get("https://api-walnut.nutbox.app/token/getPrices")
export const getPriceARB = async () =>
    get("https://arbi-api.nutbox.app/token/getPrices")
export const getPriceLinea = async () =>
    get("https://api-linea.nutbox.app/token/getPrices")
export const getPriceBase = async () => 
    get("https://base-api.nutbox.app/token/getPrices")

/****************************************  auth  ***********************************************/
export const twitterAuth = async(params) =>
    get(BACKEND_API_URL + '/auth/login', params)

export const testTwitterAuth = async() =>
    post(BACKEND_API_URL + '/auth/login', {needLogin: true, callback: 'https://deschool.app/studio/', ethAddress: '0x710FaA3d63F590832E8E7c71ecCe752456Ae3809', communityId: 'cab1b9a9ee34'})

export const twitterLogin = async(state) =>
    get(BACKEND_API_URL + '/users/login', {state})

export const twitterRefreshAccessToken = async (twitterId) =>
    post(BACKEND_API_URL + '/auth/refresh', {twitterId})

export const logout = async (twitterId) =>
    get(BACKEND_API_URL + '/auth/logout', {twitterId})

export const register = async (params) =>
    post(BACKEND_API_URL + '/register', params)

export const check = async (params) =>
    post(BACKEND_API_URL + '/register/check', params)

/****************************************  user  ***********************************************/
export const getUserInfo = async (username, ethAddress) =>
    get(BACKEND_API_URL + '/users/byusername', {username, ethAddress})

export const readNft = async (twitterId) =>
    post(BACKEND_API_URL + '/users/readNft', {twitterId})

export const getNftReceivedState = async (twitterId) =>
    get(BACKEND_API_URL + '/users/nftReceiveState', {twitterId})

export const getUsersTransaction = async (twitterId, pageSize, time, newTrans) =>
    get(BACKEND_API_URL + '/transaction/byTwitterId', { twitterId, pageSize, time, newTrans })

export const cacheKey = async (params) =>
    post(BACKEND_API_URL + '/register/cachePwd', params)

export const getProfile = async (twitterId) =>
    post(BACKEND_API_URL + '/users/profile', {twitterId})

export const getUserByEth = async (ethAddress) =>
    get(BACKEND_API_URL + '/users/getUserByEth', {ethAddress})

export const getUserByIds = async (twitterIds) =>
    get(BACKEND_API_URL + '/users/byTwitterIds', {twitterIds})

export const searchUsers = async (text) =>
    get(BACKEND_API_URL + '/users/searchUsers', {text})

export const generateWordcloud = async (twitterId) =>
    post(BACKEND_API_URL + '/wordcloud/generate', {twitterId})

export const getUserVPRC = async (twitterId) =>
    get(BACKEND_API_URL + '/users/getUserVPRC', {twitterId})

/****************************************  notification  ****************************************/
export const getPostNotiByUserId = async (twitterId, cursorId, isNew) =>
    post(BACKEND_API_URL + '/noti/getPostNotiByUserId', {twitterId, cursorId, isNew})

export const getTipNotiByUserId = async (twitterId, cursorId, isNew) =>
    post(BACKEND_API_URL + '/noti/getTipNotiByUserId', {twitterId, cursorId, isNew})

export const getSysNotiByUserId = async (twitterId, cursorId, isNew) =>
    post(BACKEND_API_URL + '/noti/getSysNotiByUserId', {twitterId, cursorId, isNew})

export const hasNewNoti = async (twitterId) =>
    post(BACKEND_API_URL + '/noti/hasNewNoti', {twitterId})

export const setNotiReaded = async (twitterId, ids) =>
    post(BACKEND_API_URL + '/noti/setNotiReaded', {twitterId, ids})

export const readAll = async (twitterId) =>
    post(BACKEND_API_URL + '/noti/readAll', {twitterId})

export const getCommunityNotis = async (communityId) =>
    get(BACKEND_API_URL + '/noti/getCommunityNotis', {communityId})

/****************************************  posts  ***********************************************/
export const getUsersPosts = async (twitterId, targetTwitterId, lastTime) =>
    get(BACKEND_API_URL + '/post/getUserPostByTime', {twitterId, targetTwitterId, lastTime})

export const getPostById = async (twitterId, postId) =>
    get(BACKEND_API_URL + '/post/getPostById', {postId, twitterId})

export const getCommentsByPostid = async (postId, lastCommentTime) =>
    get(BACKEND_API_URL + '/post/getCommentsByPostid', {postId, lastCommentTime})

export const getTrendingTags = async () =>
    get(BACKEND_API_URL + '/post/getTrendingTags')

export const searchTags = async (tag) =>
    get(BACKEND_API_URL + '/post/searchTags', {tag})

export const getPostByTrending = async (tag, pageIndex, pageSize, twitterId) =>
    get(BACKEND_API_URL + '/post/getPostByTrending', {tag, pageIndex, pageSize, twitterId})

export const getPostByTime = async (tag, pageIndex, pageSize, twitterId) =>
    get(BACKEND_API_URL + '/post/getPostByTime', {tag, pageIndex, pageSize, twitterId})

export const getCuratedPostByNew = async (tag, pageIndex, pageSize, twitterId) =>
get(BACKEND_API_URL + '/post/getCuratedPostByNew', {tag, pageIndex, pageSize, twitterId})

export const getCuratedPostByTrending = async (tag, pageIndex, pageSize, twitterId) =>
    get(BACKEND_API_URL + '/post/getCuratedPostByTrending', {tag, pageIndex, pageSize, twitterId})

export const quotePost = async (twitterId, tweetId, content) =>
    post(BACKEND_API_URL + '/post/quotePost', {twitterId, tweetId, content})

export const replyPost = async (twitterId, tweetId, content, parentTwitterId) =>
    post(BACKEND_API_URL + '/post/replyPost', {twitterId, tweetId, content, parentTwitterId})

export const likePost = async (twitterId, tweetId) =>
    post(BACKEND_API_URL + '/post/likePost', {twitterId, tweetId})

export const unLikePost = async (twitterId, tweetId) =>
    post(BACKEND_API_URL + '/post/unLikePost', {twitterId, tweetId})

export const retweetPost = async (twitterId, tweetId) =>
    post(BACKEND_API_URL + '/post/retweetPost', {twitterId, tweetId})

export const userFollow = async (twitterId, tweetId) =>
    post(BACKEND_API_URL + '/post/followPost', {twitterId, tweetId})

export const quoteTree = async (name, tweetId, tag, profileImg) =>
    get(BACKEND_API_URL + '/post/quoteTree', {name, tweetId, tag, profileImg})

/****************************************  curation  ***********************************************/
export const preNewCuration = async (curation) =>
    post(BACKEND_API_URL + '/curation/preCreate', curation)

export const newCuration = async (curation) =>
    post(BACKEND_API_URL + '/curation/newCuration', curation)

export const newCurationWithTweet = async (curation) =>
    post(BACKEND_API_URL + '/curation/newCurationWithTweet', curation)

export const likeCuration = async (twitterId, tweetId, curationId) =>
    post(BACKEND_API_URL + '/curation/likeCuration', {twitterId, tweetId, curationId})

export const followCuration = async (twitterId, authorId, curationId) =>
    post(BACKEND_API_URL + '/curation/followCuration', {twitterId, authorId, curationId})

export const quoteCuration = async (twitterId, userInfo, content, curationId) =>
    post(BACKEND_API_URL + '/curation/quoteCuration', {twitterId, userInfo, content, curationId})

export const replyCuration = async (twitterId, userInfo, content, curationId) =>
    post(BACKEND_API_URL + '/curation/replyCuration', {twitterId, userInfo, content, curationId})

export const retweetCuration = async (twitterId, curationId) =>
    post(BACKEND_API_URL + '/curation/retweetCuration', {twitterId, curationId})

export const getCurations = async (status, endtime, twitterId) =>
    get(BACKEND_API_URL + '/curation/getCurations', {status, endtime, twitterId})

export const getCurationsByTrend = async (status, score, twitterId) =>
    get(BACKEND_API_URL + '/curation/getCurationsByTrend', { status, score, twitterId })

export const getTrendingCurationsNew = async (tag, pageIndex, twitterId) =>
    get(BACKEND_API_URL + '/curation/getTrendingCurationsNew', { tag, pageIndex, twitterId })

export const getRecommendedCurations = async () =>
    get(BACKEND_API_URL + '/curation/getRecommendedCurations')

export const getCurationById = async (curationId, twitterId) =>
    get(BACKEND_API_URL + '/curation/getCurationById', {curationId, twitterId})

export const getUserCreatedCurations = async (twitterId, targetTwitterId, curationCreatedAt) =>
    get(BACKEND_API_URL + '/curation/userCreatedCurations', { twitterId, targetTwitterId, curationCreatedAt })

export const getUserRetweetedCurations = async (twitterId, targetTwitterId, curationCreatedAt) =>
    get(BACKEND_API_URL + '/curation/userRetweetedCurations', { twitterId, targetTwitterId, curationCreatedAt })

export const getUserQuotedCurations = async (twitterId, targetTwitterId, curationCreatedAt) =>
    get(BACKEND_API_URL + '/curation/userQuotedCurations', { twitterId, targetTwitterId, curationCreatedAt })

export const getUserLikedCurations = async (twitterId, targetTwitterId, curationCreatedAt) =>
    get(BACKEND_API_URL + '/curation/userLikedCurations', { twitterId, targetTwitterId, curationCreatedAt })

export const getCurationsOfTweet = async (tweetId) =>
    get(BACKEND_API_URL + '/curation/getCurationsOfTweet', {tweetId})

export const getCurationRecord = async (curationId, createAt, isFeed) =>
    get(BACKEND_API_URL + '/curation/getCurationRecord', { curationId, createAt, isFeed })

export const getAutoCurationRecord = async (curationId, createAt, isFeed) =>
    get(BACKEND_API_URL + '/curation/getAutoCurationRecord', { curationId, createAt, isFeed })

export const getCurationCreateRelation = async (curationId) =>
    get(BACKEND_API_URL + '/curation/getCurationCreateRelation', {curationId})

export const getMyParticipantionInCuration = async (twitterId, curationId) =>
    post(BACKEND_API_URL + '/curation/getMyParticipantionInCuration', {twitterId, curationId})

export const checkMyCurationRecord = async (twitterId, curationId) =>
    post(BACKEND_API_URL + '/curation/checkMyParticipantion', {twitterId, curationId})

export const replyToCurationByWH3 = async (twitterId, twitterUsername, curationId, tweetId, amount, symbol, chainName) =>
    post(BACKEND_API_URL + '/curation/replyByWh3', {twitterId, twitterUsername, curationId, tweetId, amount, symbol, chainName})

export const curation_test = async (twitterId) =>
    post(BACKEND_API_URL + '/curation/test', {twitterId})

/****************************************  spaces  ***********************************************/
export const getSpaceInfo = async (spaceId) =>
    get(BACKEND_API_URL + '/space/bySpaceId', { spaceId })

export const spaceCurationRecord = async (curationId, createAt, isFeed) =>
    get(BACKEND_API_URL + '/space/curationRecord', { curationId, createAt, isFeed })

export const spaceSpeakerRecord = async (curationId) =>
    get(BACKEND_API_URL + '/space/speakerRecord', { curationId })

export const getSpaceCurationRewardList = async (twitterId, createAt) =>
    get(BACKEND_API_URL + '/space/getSpaceCurationRewardList', { twitterId, createAt })

export const getSpaceCurationHistoryRewardList = async (twitterId, communityId, createAt) =>
    get(BACKEND_API_URL + '/space/getSpaceCurationHistoryRewardList', { twitterId, communityId, createAt })

export const getSpaceClaimRewardsParas = async (communityId, twitterId, ids) =>
    post(BACKEND_API_URL + '/space/getSpaceClaimRewardsParas', {communityId, twitterId, ids})

export const setSpaceRewardClaimed = async (twitterId, curationIds, orderId, transHash) =>
    post(BACKEND_API_URL +'/space/setSpaceRewardClaimed', {twitterId, curationIds, orderId, transHash})

/****************************************  topics  ***********************************************/
export const getPopularTopics = async () =>
    get(BACKEND_API_URL + '/post/getTrendingTags')

export const getNewCurationsByTag = async (twitterId, status, endtime, tag) =>
    get(BACKEND_API_URL + '/curation/getNewCurationsByTag', {twitterId, status, endtime, tag})

export const getTrendingCurationsByTag = async (twitterId, status, score, tag) =>
    get(BACKEND_API_URL + '/curation/getTrendingCurationsByTag', {twitterId, status, score, tag})


/****************************************  popup  ***********************************************/
export const popupsOfCuration = async (twitterId, curationId) =>
    get(BACKEND_API_URL + '/popup/popupsOfCuration', {twitterId, curationId})

export const popupRecords = async (tweetId, rowIndex) =>
    get(BACKEND_API_URL + '/popup/popupRecords', {tweetId, rowIndex})

export const newPopup = async (popup) =>
    post(BACKEND_API_URL + '/popup/newPopup', popup)

export const checkMyPopupRecord = async (twitterId, popupId) =>
    post(BACKEND_API_URL + '/popup/checkMyParticipantion', {twitterId, popupId})

/****************************************  tip  ***********************************************/
export const tipEVM = async (tip) =>
    post(BACKEND_API_URL + '/tip/tip', tip)

export const getAllTipsOfCuration = async (curationId) =>
    get(BACKEND_API_URL + '/tip/tipsByCurationId', {curationId})

export const getAllTipsByTweetId = async (tweetId) =>
    get(BACKEND_API_URL + '/tip/tipsByTweetId', {tweetId})

export const getTopTipsOfCuration = async (curationId) =>
    get(BACKEND_API_URL + '/tip/topTipsByCurationId', {curationId})

export const getTopTipsOfTweetId = async (tweetId) =>
    get(BACKEND_API_URL + '/tip/topTipsByTweetId', {tweetId})

export const getUsersTips = async (params) =>
    post(BACKEND_API_URL + '/tip/tipsByTwitterId', params)

/****************************************  rewards  ***********************************************/
export const getCurationRewardList = async (twitterId, chainId, createAt) =>
    post(BACKEND_API_URL + '/users/curationRewardList', {twitterId, chainId, createAt})

export const curationRewardListHistory = async (twitterId, chainId, createAt) =>
    post(BACKEND_API_URL + '/users/curationRewardListHistory', {twitterId, chainId, createAt})

export const autoCurationRewardList = async (twitterId, createdAt) =>
    post(BACKEND_API_URL + '/users/autoCurationRewardList', {twitterId, createdAt})

export const autoCurationAuthorRewardList = async (twitterId, createdAt) =>
    post(BACKEND_API_URL + '/users/autoCurationAuthorRewardList', {twitterId, createdAt})

export const getClaimParas = async (twitterId, chainId, ids) =>
    post(BACKEND_API_URL + '/curation/getClaimParas', {twitterId, chainId, ids})

export const setCurationIsFeed = async (twitterId, curationIds) =>
    post(BACKEND_API_URL + '/curation/setCurationIsFeed', {twitterId, curationIds})

export const getCurationRewardsOfPost = async (postId) =>
    get(BACKEND_API_URL + '/curation/getCurationRewardsOfPost', {postId})

export const getCommunityPendingRewards = async (twitterId) =>
    get(BACKEND_API_URL + '/community/getCommunityPendingRewards', { twitterId })

export const getCommunityAuthorPendingRewards = async (twitterId) =>
    get(BACKEND_API_URL + '/community/getCommunityAuthorPendingRewards', { twitterId })

export const getCommunityClaimRewardsParas = async (communityId, twitterId, ids) =>
    post(BACKEND_API_URL + '/community/getClaimRewardsParas', { communityId, twitterId, ids })

export const getCommunityClaimAuthorRewardsParas = async (communityId, twitterId, ids) =>
    post(BACKEND_API_URL + '/community/getClaimAuthorRewardsParas', { communityId, twitterId, ids })

export const setCommunityRewardClaimed = async (twitterId, curationIds, orderId, transHash) =>
    post(BACKEND_API_URL + '/community/setCurationIsDistributed', { twitterId, curationIds, orderId, transHash })

export const setCommunityAuthorRewardClaimed = async (twitterId, curationIds, orderId, transHash) =>
    post(BACKEND_API_URL + '/community/setCurationAuthorRewardIsDistributed', { twitterId, curationIds, orderId, transHash })

export const getCommunityHistoryRewards = async (twitterId, communityId, createAt) =>
    get(BACKEND_API_URL + '/community/getCommunityHistoryRewards', { twitterId, communityId, createAt })

export const getCommunityAuthorHistoryRewards = async (twitterId, communityId, createAt) =>
    get(BACKEND_API_URL + '/community/getCommunityAuthorHistoryRewards', { twitterId, communityId, createAt })

/****************************************  map  ***********************************************/
export const bMapToGMapLocations = async (locations) => {
    return get('https://restapi.amap.com/v3/assistant/coordinate/convert', {
        key: 'c69f301c227fe2c5c9c1442ce51f905a',
        locations: locations,
        coordsys: 'baidu'
    })
}

/****************************************  twitter api  ***********************************************/
export const getTweetsById = async (twitterId, tweetIds) =>
    post(BACKEND_API_URL + '/twitter-api/getTweetsById', {twitterId, tweetIds})

export const getTweetById = async (twitterId, tweetId) =>
    post(BACKEND_API_URL + '/twitter-api/getTweetById', {twitterId, tweetId})

export const getSapceBySpaceId = async (twitterId, spaceId) =>
    post(BACKEND_API_URL + '/twitter-api/getSpaceInfo', {twitterId, spaceId})

export const userFollowing = async (twitterId, authorId) =>
    post(BACKEND_API_URL + '/twitter-api/userFollowing', {twitterId, authorId})

export const userLike = async (twitterId, tweetId) =>
    post(BACKEND_API_URL + '/twitter-api/userLike', {twitterId, tweetId})

export const userTweet = async (twitterId, text) =>
    post(BACKEND_API_URL + '/twitter-api/tweet', {twitterId, text})

export const userReply = async (twitterId, tweetId, text) =>
    post(BACKEND_API_URL + '/twitter-api/reply', {twitterId, tweetId, text})

// userId can be twitter_id or username
export const getUserInfoFromTwitter = async (twitterId, userId) =>
    post(BACKEND_API_URL + '/twitter-api/getUserInfo', {twitterId, userId})

/****************************************  faucet  ***********************************************/
export const getFaucet = async (address) =>
    get(BACKEND_API_URL + '/faucet/usdt', {address})

export const applyAirdrop = async (twitterId) =>
    post(BACKEND_API_URL + '/faucet/apply', {twitterId})

export const getDropRecord = async (twitterId) =>
    get(BACKEND_API_URL + '/faucet/record', {twitterId})

/****************************************  NFT  ***********************************************/
export const getLiquidationMetaBy = async (url) =>
    get(url)

/****************************************  New year card  ***********************************************/
export const newBlindCards = async (params) =>
    post(BACKEND_API_URL + '/newYear/newBlindCards', params)

export const getBlindCardsByIds = async (ids) =>
    get(BACKEND_API_URL + '/newYear/getBlindCardsByIds', {ids})

export const getBanner = async () =>
    get(BACKEND_API_URL + '/newYear/getBanner')

/****************************************  Community  ***********************************************/
export const getCommunities = async (twitterId) =>
    get(BACKEND_API_URL + '/community/getCommunities', {twitterId})

export const getCommunityById = async (twitterId, communityId) =>
    get(BACKEND_API_URL + '/community/getCommunityById', {twitterId, communityId})

export const getCommunityByTopicId = async (twitterId, topicId) =>
    get(BACKEND_API_URL + '/community/getCommunityByTopicId', {twitterId, topicId})

export const getCommunityConfigs = async (communityId) =>
    get(BACKEND_API_URL + '/community/getCommunityConfigs', {communityId})

export const getCommunityTrendingPosts = async (twitterId, communityId, pageSize, pageIndex) =>
    get(BACKEND_API_URL + '/community/getCommunityTrendingPosts', { twitterId, communityId, pageSize, pageIndex })

export const getCommunityPromotionPosts = async (twitterId, communityId, lastPostId) =>
    get(BACKEND_API_URL + '/community/getCommunityPromotionPosts', { twitterId, communityId, lastPostId})

export const getCommunityNewPosts = async (twitterId, communityId, lastPostId) =>
    get(BACKEND_API_URL + '/community/getCommunityNewPosts', { twitterId, communityId, lastPostId})

export const getCommunitySpaces = async (twitterId, communityId, lastPostId) =>
    get(BACKEND_API_URL + '/community/getCommunitySpaces', { twitterId, communityId, lastPostId })

export const getCommunityActivities = async (communityId, state) =>
    get(BACKEND_API_URL + '/community/getCommunityActivities', {communityId, state})

export const getCommunityActivityById = async (activityId) =>
    get(BACKEND_API_URL + '/community/getCommunityActivityById', {activityId})

export const getCommunityActivePostsByNew = async (twitterId, activityId, lastPostId) =>
    get(BACKEND_API_URL + '/community/getCommunityActivePostsByNew', {twitterId, activityId, lastPostId})

    export const getCommunityActivePostsByTrending = async (twitterId, activityId, lastPostId) =>
    get(BACKEND_API_URL + '/community/getCommunityActivePostsByTrending', {twitterId, activityId, lastPostId})

export const getCommunityActivityReward = async (activityId, createTime) =>
    get(BACKEND_API_URL + '/community/getCommunityActivityReward', { activityId, createTime })

export const getCommunityTopicCuratorReward = async (activityId, pageIndex, pageSize) =>
    get(BACKEND_API_URL +'/community/getCommunityTopicCuratorReward', { activityId, pageIndex, pageSize })

export const getCommunityTopicCreatorReward = async (activityId, pageIndex, pageSize) =>
    get(BACKEND_API_URL +'/community/getCommunityTopicCreatorReward', { activityId, pageIndex, pageSize })

export const getCommunityAnnouncement = async (twitterId, communityId, lastPostId) =>
    get(BACKEND_API_URL + '/community/getCommunityAnnouncement', {twitterId, communityId, lastPostId})

export const joinCommunity = async (twitterId, communityId) =>
    post(BACKEND_API_URL + '/community/joinCommunity', {twitterId, communityId})

export const exitCommunity = async (twitterId, communityId) =>
    post(BACKEND_API_URL + '/community/exitCommunity', {twitterId, communityId})

export const getCommunityMembers = async (communityId, pageSize, pageIndex) =>
    get(BACKEND_API_URL + '/community/getCommunityMembers', {communityId, pageSize, pageIndex})

export const getJoinCommunityState = async (twitterId, communityIds) =>
    post(BACKEND_API_URL + '/community/getJoinCommunityState', {twitterId, communityIds})

export const searchCommunityByName = async (communityName) =>
    get(BACKEND_API_URL + '/community/searchCommunityByName', {communityName})

// community operations
export const getCommunityOps = async (communityId, createTime) =>
    get(BACKEND_API_URL + '/community/getCommunityOps', {communityId, createTime})

export const getCommunityNotEndedSpacesAndActivities = async (communityId, pageIndex) =>
    get(BACKEND_API_URL + '/community/getCommunityNotEndedSpacesAndActivities', {communityId, pageIndex})

export const getCommunityEndedSpacesAndActivities = async (communityId, pageIndex) =>
    get(BACKEND_API_URL + '/community/getCommunityEndedSpacesAndActivities', {communityId, pageIndex})

/****************************************  Invitation  ***********************************************/
export const getInvitorsOfUser = async (twitterId, pageSize, pageIndex) =>
    post(BACKEND_API_URL + '/invitation/getInvitorsOfUser', {twitterId, pageSize, pageIndex})

export const getInvitorsCountOfUser = async (twitterId) =>
    post(BACKEND_API_URL + '/invitation/getInvitorsCountOfUser', {twitterId})

export const getMyInvitor = async (twitterId) =>
    get(BACKEND_API_URL + '/invitation/getMyInvitor', {twitterId})

export const addInvitation = async (referee, twitterId) =>
    post(BACKEND_API_URL + '/invitation/addInvitation', {referee, twitterId})

export const getPendingClaimSummary = async (twitterId) =>
    get(BACKEND_API_URL + '/invitation/getPendingClaimSummary', {twitterId})

export const getMoreInvitationReward = async (twitterId, communityId, createTime, isFeed) =>
    get(BACKEND_API_URL + '/invitation/getMoreInvitationReward', {twitterId, communityId, createTime, isFeed})

export const getClaimRewardsParas = async (communityId, twitterId) =>
    post(BACKEND_API_URL + '/invitation/getClaimRewardsParas', {communityId, twitterId})

export const setInvitationRewardClaimed = async (orderId, communityId, twitterId, transHash) =>
    post(BACKEND_API_URL + '/invitation/setClaimed', {orderId, communityId, twitterId, transHash})


/****************************************  Community manage  ***********************************************/
export const getWh3CommunityByEth = async (ethAddress) =>
    get(BACKEND_API_URL + '/community/getCommunityByEth', { ethAddress })

export const createWh3Community = async (infoStr, ethAddress, signature) =>
    put(BACKEND_API_URL + '/community/createCommunity', {infoStr, ethAddress, signature})

export const getMyNutboxCommunityInfo = async (communityId) =>
    get("https://arbi-api.nutbox.app/community/get", { communityId })