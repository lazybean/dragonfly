// Autogenerated by hob
window.cls || (window.cls = {});
cls.ResourceManager || (cls.ResourceManager = {});
cls.ResourceManager["1.0"] || (cls.ResourceManager["1.0"] = {});

cls.ResourceManager["1.0"].Response = function(arr, parent)
{
  this.parent = parent || null;
  this.requestID = arr[0];
  this.resourceID = arr[1];
  this.time = arr[2];
  /** 
    * HTTP response code, such as 200, 404, etc.
    */
  this.responseCode = arr[3];
  this.toString = function() { return "[message Response]"; }
};

