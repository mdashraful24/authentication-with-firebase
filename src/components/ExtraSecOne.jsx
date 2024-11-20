import review from '../../src/assets/winter-clothes-donationvector.png'

const ExtraSecOne = () => {
    return (
        <div>
            <div class="bg-gray-100 py-16 px-5 mb-24">
                <h2 class="text-3xl md:text-4xl text-center text-[#6b2c83] font-bold mb-6 md:mb-14 lg:mb-14">What People Are Saying</h2>
                <div class="max-w-4xl mx-auto grid gap-6 lg:grid-cols-2">
                    {/* <!-- Testimonial 1 --> */}
                    <div class="bg-white p-6 shadow-md hover:shadow-xl rounded-lg">
                        <img class="w-12 h-12 rounded-full mr-4 mb-2" src={review} alt="Maria's picture"></img>
                        <p class="text-gray-700 italic">
                            "Thanks to this initiative, my family received warm coats just in time for winter. It has been a lifesaver for us."
                        </p>
                        <div class="mt-4 text-right">
                            <span class="font-semibold text-gray-800">– Maria, Mother of Three</span>
                        </div>
                    </div>
                    {/* <!-- Testimonial 2 --> */}
                    <div class="bg-white p-6 shadow-md hover:shadow-xl rounded-lg">
                        <img class="w-12 h-12 rounded-full mr-4 mb-2" src={review} alt="Maria's picture"></img>
                        <p class="text-gray-700 italic">
                            "The jacket I received has made such a difference in my daily life. I’m so grateful for the support."
                        </p>
                        <div class="mt-4 text-right">
                            <span class="font-semibold text-gray-800">– John, Community Member</span>
                        </div>
                    </div>
                    {/* <!-- Testimonial 3 --> */}
                    <div class="bg-white p-6 shadow-md hover:shadow-xl rounded-lg">
                        <img class="w-12 h-12 rounded-full mr-4 mb-2" src={review} alt="Maria's picture"></img>
                        <p class="text-gray-700 italic">
                            "This program brought warmth to our lives, not just physically but emotionally too. Thank you!"
                        </p>
                        <div class="mt-4 text-right">
                            <span class="font-semibold text-gray-800">– Sarah, Single Parent</span>
                        </div>
                    </div>
                    {/* <!-- Testimonial 4 --> */}
                    <div class="bg-white p-6 shadow-md hover:shadow-xl rounded-lg">
                        <img class="w-12 h-12 rounded-full mr-4 mb-2" src={review} alt="Maria's picture"></img>
                        <p class="text-gray-700 italic">
                            "Knowing someone cares made all the difference. My children now have boots to walk to school in the snow."
                        </p>
                        <div class="mt-4 text-right">
                            <span class="font-semibold text-gray-800">– Ahmed, Father of Two</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ExtraSecOne;