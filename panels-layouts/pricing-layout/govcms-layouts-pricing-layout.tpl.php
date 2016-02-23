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

<div class="panel panel-primary">
  <div class="panel-heading">
    <h3 class="text-center"><strong><?php print $content['page_views_per_month']; ?></strong> <br>page views / month</h3>
  </div>
  <div class="panel-body text-center">
    <p class="lead">
      $<strong><?php print $content['total_cost']; ?></strong> <br>/ year
    </p>
  </div>
  <div class="plus-separator"></div>
  <ul class="list-group list-group-flush text-center">
    <li class="list-group-item">
      <span class="optional">(Optional)</span><br>
      <span class="heading-style">Additional sites</span><br>
      $<strong><?php print $content['additional_sites']; ?></strong> / year, per site<br>
      <small>capped at $<?php print $content['additional_sites_capped']; ?></small>
    </li>
    <div class="plus-separator"></div>
    <li class="list-group-item">
      <span class="heading-style">Setup fee</span><br>
      $<strong><?php print $content['setup_fee']; ?></strong> per site
    </li>
  </ul>
  <div class="panel-footer">
    <a class="btn btn-lg btn-block btn-primary">Sign up</a>
  </div>
</div>