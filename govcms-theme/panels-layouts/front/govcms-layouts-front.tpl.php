<?php
/**
 * @file
 * Template for a 3 column panel layout.
 *
 * This template provides a very simple "one column" panel display layout.
 *
 * Variables:
 * - $id: An optional CSS id to use for the layout.
 * - $content: An array of content, each item in the array is keyed to one
 *   panel of the layout. This layout supports the following sections:
 *   $content['middle']: The only panel in the layout.
 */
?>

<?php if ($content['intro']): ?>
  <section class="about move-to-top" id="about">
    <div class="container">
      <?php print $content['intro']; ?>
    </div>
  </section>
<?php endif; ?>


<?php if ($content['clients']): ?>
  <section class="clients light-bg" id="clients">
    <div class="container">
      <?php print $content['clients']; ?>
    </div>
  </section>
<?php endif; ?>


<?php if ($content['testimonial_split']): ?>
  <section class="split testimonial">
    <div class="container">
      <div class="row">
        <?php print $content['testimonial_split']; ?>
      </div>
    </div>
  </section>
<?php endif; ?>


<?php if ($content['why_use']): ?>
  <section class="icons-grid bg-primary" id="services">
    <div class="container">
      <div class="row text-center">
        <?php print $content['why_use']; ?>
      </div>
    </div>
  </section>
<?php endif; ?>


<?php if ($content['more_information_split']): ?>
  <section class="split">
    <div class="container">
      <div class="row">
        <?php print $content['more_information_split']; ?>
      </div>
    </div>
  </section>
<?php endif; ?>