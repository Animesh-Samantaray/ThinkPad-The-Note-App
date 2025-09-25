import ratelimit from "../config/upstash.js"
 const rateLimiter = async(req,res,next)=>{

    try {
        const {success} = await ratelimit.limit('my-limit-key')
        if(!success){
            return res.status(429).json({
                message:'Too mny requests , try later'
            })
        }
        next()
    } catch (error) {
        console.log('ratelimiter error');
        res.status(500).json({message:error.message})
    }
}

export default rateLimiter