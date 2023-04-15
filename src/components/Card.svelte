<div class=" bg-white w-96 max-w-full rounded-lg overflow-hidden">
    <div class="bg-primary px-4 py-2 text-secondary text-xl font-bold">
        <slot name="header"></slot>
    </div>

    <div class="px-4 py-2 font-bold text-secondary">
        <slot name="sub-header"/>
    </div>

    <div class="flex w-full justify-center text-secondary text-xl font-bold">
        <div class="bg-primary w-12 h-12 rounded-full flex justify-center items-center">
            <slot name="number"/>
        </div>
    </div>

    <div class="w-full flex justify-end px-4 py-2">
        <slot name="button"/>
    </div>
</div>