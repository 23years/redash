export let $http = null; // eslint-disable-line import/no-mutable-exports
export let $q = null; // eslint-disable-line import/no-mutable-exports
export let $rootScope = null; // eslint-disable-line import/no-mutable-exports

export default function init(ngModule) {
  ngModule.run($injector => {
    $http = $injector.get("$http");
    $q = $injector.get("$q");
    $rootScope = $injector.get("$rootScope");
  });
}

init.init = true;
