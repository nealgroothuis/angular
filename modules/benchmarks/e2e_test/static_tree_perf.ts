import {runClickBenchmark, verifyNoBrowserErrors} from 'angular2/src/testing/perf_util';

describe('ng2 static tree benchmark', function() {

  var URL = 'benchmarks/src/static_tree/tree_benchmark.html';

  afterEach(verifyNoBrowserErrors);

  it('should log the ng stats with viewcache', function(done) {
    runClickBenchmark({
      url: URL,
      buttons: ['#ng2DestroyDom', '#ng2CreateDom'],
      id: 'ng2.static.tree.create.viewcache',
      params: [{name: 'viewcache', value: 'true'}]
    }).then(done, done.fail);
  });

  it('should log the ng stats without viewcache', function(done) {
    runClickBenchmark({
      url: URL,
      buttons: ['#ng2DestroyDom', '#ng2CreateDom'],
      id: 'ng2.static.tree.create.plain',
      params: [{name: 'viewcache', value: 'false'}]
    }).then(done, done.fail);
  });

  it('should log the ng stats (update)', function(done) {
    runClickBenchmark({
      url: URL,
      buttons: ['#ng2CreateDom'],
      id: 'ng2.static.tree.update',
      params: [{name: 'viewcache', value: 'true'}]
    }).then(done, done.fail);
  });

  it('should log the baseline stats', function(done) {
    runClickBenchmark({
      url: URL,
      buttons: ['#baselineDestroyDom', '#baselineCreateDom'],
      id: 'baseline.static.tree.create',
      params: [{name: 'depth', value: 9, scale: 'log2'}]
    }).then(done, done.fail);
  });

  it('should log the baseline stats (update)', function(done) {
    runClickBenchmark({
      url: URL,
      buttons: ['#baselineCreateDom'],
      id: 'baseline.static.tree.update',
      params: [{name: 'depth', value: 9, scale: 'log2'}]
    }).then(done, done.fail);
  });

});
