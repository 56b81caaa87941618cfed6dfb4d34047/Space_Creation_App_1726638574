<!-- 
INSTRUCTION: Summary: This component contains a h2 heading title for the CTA, a line of text under it, and a button underneath it. They are all centre aligned.
-->
<template>
    <section id="cta-component" class="flex-1 bg-gradient-to-br from-pink-500 to-purple-700 min-h-[390px] p-8">
        <div id="cta-inner-container" class="max-w-screen-xl mx-auto bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-8">
            <div id="cta-content" class="max-w-screen-sm mx-auto text-center">
                <div id="cta-title-container" class="flex">
                    <h2 id="cta-title" class="flex-1 mb-4 text-3xl font-extrabold leading-tight tracking-tight text-white">
                        Launch Your Space Adventure
                    </h2>
                </div>

                <div id="cta-subtitle-container" class="flex">
                    <p id="cta-subtitle" class="flex-1 mb-6 font-light text-gray-200 md:text-lg">
                        Create, explore, and customize your own virtual cosmic realm with our innovative space-making app
                    </p>
                </div>

                <div id="cta-button-container" class="flex">
                    <a id="cta-button" href="#" class="flex-1 text-purple-900 bg-pink-300 bg-opacity-70 hover:bg-opacity-90 focus:ring-4 focus:ring-pink-500 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 transition duration-300 ease-in-out transform hover:scale-105">
                        Start Building Your Universe
                    </a>
                </div>
                <div id="fans-button-container" class="flex mt-4">
                    <a id="fans-button" href="#" class="flex-1 text-white bg-purple-600 bg-opacity-70 hover:bg-opacity-90 focus:ring-4 focus:ring-purple-500 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 transition duration-300 ease-in-out transform hover:scale-105">
                        <i class='bx bx-group mr-2'></i>
                        Fans
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            expanded: false,
            tab: null
        };
    }
};
</script>
