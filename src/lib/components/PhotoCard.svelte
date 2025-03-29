<script lang="ts">
	import type { Picture } from 'vite-imagetools';

	let { name, number, image } :
	{
		name: string | undefined,
		number: string,
		image : Picture
	} = $props();

</script>


<div class="main-card">
  <div class="corner top left"></div>
  <div class="corner top right"></div>
  <div class="corner bottom left"></div>
  <div class="corner bottom right"></div>
  <p class="number">{number}</p>
  <div class="photo-border cutout-corners-xs cutout-top-xs">
    <enhanced:img class="object-cover w-sm aspect-[0.625] cutout-corners-xs cutout-top-xs" src={image} alt={name} />
  </div>
  <div class="title-outline">
    <div class="title-border">
      <p class="title">{name}</p>
    </div>
  </div>
</div>
