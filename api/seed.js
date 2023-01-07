// 🖐️ don not run. It has already been run on local environment
async function seed () {
    mongoose.set("strictQuery", false);
    const db = await mongoose.connect("");
    console.log(typeof Counter);
    const Cunter = newCounter.find({
        name: "count"
    })
}
seed();