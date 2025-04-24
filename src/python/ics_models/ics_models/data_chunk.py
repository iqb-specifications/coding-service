from pydantic import BaseModel, StrictStr

from .chunk_type import ChunkType


class DataChunk(BaseModel):
    id: StrictStr
    type: ChunkType
