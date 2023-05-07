using TextConverterService;

namespace TextConverterServiceTest
{
    [TestFixture]
    public class Tests
    {
        private readonly IMainService _mainSvc;
        public Tests()
        {
            _mainSvc = new MainService();
        }        

        [TestCase("Test", "VGVzdA==")]
        [TestCase("Norman", "Tm9ybWFu")]
        [TestCase("Lorem Ipsum Dolor", "TG9yZW0gSXBzdW0gRG9sb3I=")]
        public async Task ProcessRequest_UnitTest(string input, string expectedResult)
        {
            string? actualResult = await _mainSvc.ProcessRequest(input);

            Assert.That(expectedResult, Is.EqualTo(actualResult));
        }
    }
}