<script lang="ts">
	import type { Picture } from 'vite-imagetools';

	let { name, number, image } :
	{
		name: string | undefined,
		number: string,
		image : Picture
	} = $props();

</script>


<div class="preview-card">
  <div class="corner top left"></div>
  <div class="corner top right"></div>
  <div class="corner bottom left"></div>
  <div class="corner bottom right"></div>
  <p class="number">{number}</p>
  <div class="photo-border">
    <enhanced:img class="photo" src="$lib/assets/the-hunt.jpg" alt="The Hunt" />
  </div>
</div>

<br />
<br />
<br />
<br />
<br />

<div class="main-card">
  <div class="corner top left"></div>
  <div class="corner top right"></div>
  <div class="corner bottom left"></div>
  <div class="corner bottom right"></div>
  <p class="number">{number}</p>
  <div class="photo-border">
    <enhanced:img class="photo" src={image} alt={name} />
  </div>
  <div class="title-outline">
    <div class="title-border">
      <p class="title">{name}</p>
    </div>
  </div>
</div>

<br />
<br />
<br />
<br />
