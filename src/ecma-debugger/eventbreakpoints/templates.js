(function()
{
  /* extends window.templates interface */

  /* constants */

  const NAME = 0, CHECKED = 1;

  this.ev_brp_config = function(events)
  {
    return ['ul', events.map(this.ev_brp_section, this)];
  }

  this.ev_brp_section = function(section, index)
  {
    return (
    [
      'li',
        ['header', 
          ['input', 'type', 'button'],
          section.title, 
          'handler', 'ev-brp-expand-section', 
          'class', section.is_unfolded ? '' : ''
        ],
        section.is_unfolded ?
        ['ul', this.ev_brp_event_list(section.events)] :
        [],
      'index', index.toString(),
    ]);
      
  }

  this.ev_brp_event_list = function(event_list)
  {
    return ['ul', event_list.map(this.ev_brp_event, this), 'class', 'event-list'];
  }

  this.ev_brp_event = function(event, index)
  {
    return (
    ['li',
      ['label',
        ['input',
          'type', 'checkbox',
          'index', index.toString(),
          'handler', 'event-breakpoint',
        ].concat(event[CHECKED] ? ['checked', 'checked'] : []),
        event[NAME]
      ]
    ]);
  }





}).apply(window.templates || (window.templates = {}));